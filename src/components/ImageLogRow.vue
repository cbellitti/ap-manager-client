<template>
  <tr>
    <td scope="col">{{ session.timeStart }}</td>
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
    <td scope="col">{{ session.subExposureTime }}</td>
    <td scope="col"></td>
  </tr>
</template>

<script lang="ts">
/* type Session = {
    id: Number
    focalLengtd: Number
    mount: String
    focuser: Boolean
    guider: Boolean
    rotator: Boolean
    camera: String
    target: String
    subExposureTime: String
    subExposureQty: Number
    filter: String
    gain: String
    offset: String
    binning: String
    timeStart: String
    timeEnd: String
}  */

export default {
  name: 'ImageLogRow',
  props: {
    session: Object
  }
}
</script>
