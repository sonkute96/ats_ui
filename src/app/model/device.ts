export class Device {
    constructor(
        public id: number,
        public device_id: string,
        public latitude: number,
        public longitude: number,
        public received_time: Date,
        public reported_time: Date,
        public speed: number
    ) {
    }
}