<template>
    <div class="route-container">
        <div class="back-button" @click="goBack">
            <vs-icon icon="keyboard_arrow_left"></vs-icon>
            Go back
        </div>
        <h2 style="margin-bottom: 1rem;">
            Social Distancing
        </h2>
        <div v-if="currentData == null">Loading...</div>
        <div v-else class="flex-wrapper">
            <div class="half">
                <br><br>
                <div>Name: <b> {{ currentData.Name }} </b><br><br></div>
                <div>Employee Id: <b> {{ currentData['Empid'] }} </b><br><br></div>
                <div>Mobile Number: <b> {{ currentData['Mobile number'] }} </b><br><br></div>
                <div>Visitor Id: <b> {{ currentData['Visitorid'] }} </b><br><br></div>
                <div>Cluster/Location: <b> {{ currentData['cluster']['location'] }} </b><br><br></div>
                <div>Violation Score: <b> {{ currentData['voilation score'] }} </b><br><br></div>
                <div>Violation Density: <b> {{ currentData['voilation density'] }} </b><br><br></div>
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
                    {{ currentData.video_url}}
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
import {social_api} from "@/model/constants"
import { objectToArray, stringToArray } from "@/model/utils"

import Chart from  "./Chart.vue"

export default {
    name: "SD-1",
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
            this.$router.push("/social-distancing")
        }
    },
    mounted() {
        // this.currentData = Data[Number.parseInt(this.$route.params.id)]

        axios.get(social_api)
        .then(data => {
            const d = objectToArray(data.data)
            this.currentData = d[Number.parseInt(this.$route.params.id)]

            const graph_data = {
                labels: stringToArray(this.currentData.Date),
                datasets: [
                    {
                        data: stringToArray(this.currentData["Voilation_Daywise"], 1),
                        label: this.currentData.Name,
                        borderColor: '#005bff',
                    }
                ]
            }
            
            this.currentData["graph"] = graph_data
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>