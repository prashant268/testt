<template>
  <div class="table-container">
      <vs-table
        :data="users"
        @selected="handleSelected"
    >
        <template slot="thead">
            <vs-th>Name</vs-th>
            <vs-th>Employee ID</vs-th>
            <vs-th>Visitor ID</vs-th>
            <vs-th>Cluster/Location</vs-th>
            <vs-th>Violation Score</vs-th>
            <vs-th>Violation Density</vs-th>
            <vs-th>Mask</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :data="indextr" :key="'Mask' + indextr" v-for="(tr, indextr) in data" >
                <vs-td :data="data[indextr].Name">
                    {{data[indextr].Name}}
                </vs-td>

                <vs-td :data="data[indextr]['Empid']">
                    {{data[indextr]['Empid']}}
                </vs-td>

                <vs-td :data="data[indextr]['Visitorid']">
                    {{data[indextr]['Visitorid']}}
                </vs-td>

                <vs-td :data="data[indextr]['cluster/location']">
                    {{data[indextr]['cluster/location']}}
                </vs-td>

                <vs-td :data="data[indextr]['voilation score']">
                    {{data[indextr]['voilation score']}}
                </vs-td>

                <vs-td :data="data[indextr]['voilation density']">
                    {{data[indextr]['voilation density']}}
                </vs-td>

                <vs-td :data="data[indextr]['mask']">
                    {{data[indextr]['mask']}}
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
  </div>
</template>

<script>
export default {
    name: "SD-2",
    data() {
        return {
            users: null,
        }
    },
    methods: {
        handleSelected(indextr) {
            this.$router.push(`/sd-2/${indextr}`)
        }
    }
}
</script>
