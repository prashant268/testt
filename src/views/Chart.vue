<script>
import Chart from "chart.js";
import { generateChart, mixins } from "vue-chartjs";
import "chartjs-plugin-labels";

// Chart.defaults.global.defaultFontFamily = "regular-font";
// Chart.defaults.global.title.fontFamily = "heading-bold";
// Chart.defaults.global.title.fontSize = "16";
// Chart.defaults.global.tooltips.enabled = (window.innerWidth < 600);
// Chart.defaults.global.legend.display = (window.innerWidth < 600);

const Line = generateChart("line-chart", "line");

const { reactiveProp } = mixins;

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ["chartData", "options"],
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
};
</script>
