<template>
  <div class="image-log">
    <form @submit="onSubmit">
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="log-file" class="col-form-label"
            >Manual Log File Upload</label
          >
        </div>
        <div class="col-lg-6">
          <input
            type="text"
            id="log-file"
            v-model="filename"
            class="form-control"
            placeholder="Log file"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    <table class="table .table-striped">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Target</th>
          <th scope="col">FL</th>
          <th scope="col">Guided</th>
          <th scope="col">Focuser</th>
          <th scope="col">Rot.</th>
          <th scope="col">Mount</th>
          <th scope="col">Camera</th>
          <th scope="col">Filter</th>
          <th scope="col">Gain</th>
          <th scope="col">Offset</th>
          <th scope="col">Binning</th>
          <th scope="col">Qty</th>
          <th scope="col">Time</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody :key="session.id" v-for="session in sessions">
        <ImageLogRow :session="session" @ctaDeleteSession="deleteSessions" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import ImageLogRow from '../components/ImageLogRow.vue'
import { Component, defineComponent } from 'vue'

type Session = {
  id: number
  focalLength: number
  mount: string
  focuser: boolean
  guider: boolean
  rotator: boolean
  camera: string
  target: string
  subExposureTime: string
  subExposureQty: number
  filter: string
  gain: string
  offset: string
  binning: string
  timeStart: string
  timeEnd: string
}

interface Data {
  sessions: Session[]
  filename: string
}

export default defineComponent({
  name: 'ImageLog',
  data(): Data {
    return {
      sessions: [],
      filename: ''
    }
  },
  components: {
    ImageLogRow
  },
  methods: {
    onSubmit(e: any) {
      e.preventDefault()

      if (!this.filename) {
        alert('Please add a filename')
        return
      }
      this.addSession(this.filename)
    },
    async fetchSessions(): Promise<Session[]> {
      const res = await fetch('api/sessions')
      const data: Session[] = await res.json()
      return data
    },
    async addSession(filename: string): Promise<void> {
      const res = await fetch('api/session-add', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ filename: filename })
      })

      await res.json()
      this.sessions = await this.fetchSessions()
      this.filename = ''
    },

    async deleteSessions(ids: number[]): Promise<void> {
      console.log('deleteSessions', ids)
      const res = await fetch('api/sessions-delete', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ ids })
      })

      await res.json()
      this.sessions = await this.fetchSessions()
    }
  },
  async created(): Promise<void> {
    this.sessions = await this.fetchSessions()
  }
}) as Component
</script>
