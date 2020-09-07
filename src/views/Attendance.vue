<template>
  <div class="table-container">
      <vs-table
        :data="users"
        @selected="handleSelected"
        noDataText="Loading..."
    >
    <template slot="header">
        <h3 style="margin-bottom: 1rem;">
          Contactless Attendance
        </h3>
      </template>
        <template slot="thead">
            <vs-th>Name</vs-th>
            <vs-th>Employee ID</vs-th>
            <vs-th>Mobile Number</vs-th>
            <vs-th>Cluster/Location</vs-th>
            <vs-th>Login Time</vs-th>
            <vs-th>Attendance Status</vs-th>
            <vs-th>Accuracy</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :data="indextr" :key="'Attendance' + indextr" v-for="(tr, indextr) in data" >
                <vs-td :data="data[indextr].Name">
                    {{data[indextr].Name}}
                </vs-td>

                <vs-td :data="data[indextr]['Emp_id']">
                    {{data[indextr]['Emp_id']}}
                </vs-td>

                <vs-td :data="data[indextr]['Mobile number']">
                    {{data[indextr]['Mobile number']}}
                </vs-td>

                <vs-td :data="data[indextr]['Location']">
                    {{data[indextr]['Location']}}
                </vs-td>

                <vs-td :data="data[indextr]['login time']">
                    {{data[indextr]['login time']}}
                </vs-td>

                <vs-td :data="data[indextr]['attendance status']">
                    {{data[indextr]['attendance status']}}
                </vs-td>

                <vs-td :data="data[indextr]['accuracy']">
                    {{data[indextr]['accuracy']}}
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
  </div>
</template>

<script>
import axios from "axios"

import {attendance_api} from "@/model/constants"
import { objectToArray } from "@/model/utils"

export default {
    name: "Attendace",
    data() {
        return {
            users: null,
        }
    },
    methods: {
        handleSelected(indextr) {
            this.$router.push(`/sd-4/${indextr}`)
        }
    },
    mounted() {

        axios.get(attendance_api, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            this.users = objectToArray(data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>
