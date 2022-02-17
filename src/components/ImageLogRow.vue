<template>
  <tr>
    <td scope="col">{{ session.timeStart.substr(0, 10) }}</td>
    <td scope="col">{{ session.target }}</td>
    <td scope="col">{{ session.focalLength }}</td>
    <td scope="col">{{ session.guider ? '&#10004;' : '' }}</td>
    <td scope="col">{{ session.focuser ? '&#10004;' : '' }}</td>
    <td scope="col">{{ session.rotator ? '&#10004;' : '' }}</td>
    <td scope="col">{{ session.mount }}</td>
    <td scope="col">{{ session.camera }}</td>
    <td scope="col">{{ session.filter }}</td>
    <td scope="col">{{ session.gain }}</td>
    <td scope="col">{{ session.offset }}</td>
    <td scope="col">{{ session.binning }}</td>
    <td scope="col">{{ session.subExposureQty }}</td>
    <td scope="col">{{ session.subexposureTime }}</td>
    <td scope="col">
      <button class="btn btn-danger" @click="onClick(session.id)">X</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'ImageLogRow',
  props: {
    session: Object
  },
  methods: {
    onClick(id: number): void {
      console.log('Button Click', id)
      this.$emit('ctaDeleteSession', [id])
    }
  }
}) as Component
</script>
