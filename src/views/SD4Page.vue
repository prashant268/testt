<template>
    <div class="route-container">
        <div class="back-button" @click="goBack">
            <vs-icon icon="keyboard_arrow_left"></vs-icon>
            Go back
        </div>
        <h2 style="margin-bottom: 1rem;">Contactless Attendance</h2>
        <div v-if="currentData == null">Loading...</div>
        <div v-else class="flex-wrapper">
            <div class="half">
                <br><br>
                <div>Name: <b> {{ currentData['Name'] }} </b><br><br></div>
                <div>Employee Id: <b> {{ currentData['Emp_id'] }} </b><br><br></div>
                <div>Mobile Number: <b> {{ currentData['Mobile number'] }} </b><br><br></div>
                <div>Cluster/Location: <b> {{ currentData['Location'] }} </b><br><br></div>
                <div>Login Time: <b> {{ currentData['login time'] }} </b><br><br></div>
                <div>Attendance: <b> {{ currentData['attendance status'] }} </b><br><br></div>
                <div>Accuracy: <b> {{ currentData['accuracy'] }} </b><br><br></div>
            </div>
            <div class="half">
                <video
                    width="500px"
                    height="350px"
                    controls
                    style="object-fit: cover;"
                    v-if="currentData.video_url != undefined || currentData.video_url != null"
                >
                <source :src="currentData.video_url" type="video/mp4" />
                </video>
                <p v-else>
                    Video Not Found!
                </p>
                <div style="margin-top: 1rem">
                    <Chart
                        :chart-data="currentData.graph"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import {attendance_api} from "@/model/constants"
import { objectToArray, stringToArray } from "@/model/utils"

import Chart from  "./Chart.vue"

export default {
    name: "SD-4",
    components: {
        Chart
    },
    data() {
        return {
            currentData: null,
        }
    },
    methods: {
        goBack() {
            this.$router.push("/attendance")
        }
    },
    mounted() {
        // this.currentData = Data[Number.parseInt(this.$route.params.id)]
        axios.get(attendance_api)
        .then(data => {
            const d = objectToArray(data.data)
            this.currentData = d[Number.parseInt(this.$route.params.id)]
            
            const graph_data = {
                labels: stringToArray(this.currentData.Month),
                datasets: [
                    {
                        data: stringToArray(this.currentData["Days_Present"], 1),
                        label: this.currentData.Name,
                        borderColor: '#005bff',
                    }
                ]
            }
            
            this.currentData["graph"] = graph_data
        })
    }
}
</script>