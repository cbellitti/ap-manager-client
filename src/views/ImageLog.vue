<template>
  <div class="image-log">
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
        <ImageLogRow :session="session" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import ImageLogRow from '../components/ImageLogRow.vue'
import { defineComponent } from 'vue'

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
}

export default defineComponent({
  name: 'ImageLog',
  data(): Data {
    return {
      sessions: []
    }
  },
  components: {
    ImageLogRow
  },
  methods: {
    async fetchSessions(): Promise<Session[]> {
      const res = await fetch('api/sessions')
      const data: Session[] = await res.json()
      return data
    }
  },
  async created(): Promise<void> {
    this.sessions = await this.fetchSessions()
  }
}) as any
</script>
