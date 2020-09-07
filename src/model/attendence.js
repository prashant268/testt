import  MarthVideo from "./sd_mask/martha.mp4";
import GraceVideo from "./sd_video/grace-corrected.mp4";
import MikeVideo from "./sd_video/mike-corrected.mp4";
import NatashaVideo from "./sd_video/natasha-corrected.mp4";
import  JohnVideo from "./sd_mask/john.mp4";

export default [
 {
   "Name": "Mike",
   "Emp_id": 10012,
   "location": "location1",
   "login time": "9:03 AM",
   "attendance status": "marked",
    "accuracy": "100%",
    "video": MikeVideo,
    "graph": {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'April',
        'May'
      ],
      datasets: [
        {
          data: [
            21, 25, 22, 22, 22
          ],
          label: "Mike",
          borderColor: '#f00',
        }
      ]
   }
 },
 {
   "Name": "Grace",
   "Emp_id": 10550,
   "location": "location3",
   "login time": "9:35 AM",
   "attendance status": "marked ",
   "accuracy": "100%",
   "video": GraceVideo,
   "graph": {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'April',
        'May'
      ],
      datasets: [
        {
          data: [
            23, 24, 17, 23, 21
          ],
          label: "Grace",
          borderColor: '#f00',
        }
      ]
   }
 },
 {
   "Name": "Natasha",
   "Emp_id": 10551,
   "location": "location2",
   "login time": "9:20 AM",
   "attendance status": "marked",
   "accuracy": "100%",
   "video": NatashaVideo,
   "graph": {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'April',
        'May'
      ],
      datasets: [
        {
          data: [
            26, 11, 24, 24, 24
          ],
          label: "Natasha",
          borderColor: '#f00',
        }
      ]
   }
 },
 {
   "Name": "John",
   "Emp_id": 10013,
   "location": "location3",
   "login time": "10.00 AM",
   "attendance status": "marked",
   "accuracy": "100%",
   "video": JohnVideo,
   "graph": {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'April',
        'May'
      ],
      datasets: [
        {
          data: [
            22, 24, 18, 25, 20
          ],
          label: "John",
          borderColor: '#f00',
        }
      ]
   }
 },
 {
   "Name": "Martha",
   "Emp_id": 10550,
   "location": "location4",
   "login time": "11:00 AM",
   "attendance status": "marked",
   "accuracy": "100%",
   "video": MarthVideo,
   "graph": {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'April',
        'May'
      ],
      datasets: [
        {
          data: [
            25, 28, 26, 26, 26
          ],
          label: "Martha",
          borderColor: '#f00',
        }
      ]
   }
 }
]