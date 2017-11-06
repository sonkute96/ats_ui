export class Asset {
    constructor(
        public id: number,
        public stamp: number,
        public identifier: string,
        public serial_no: string,
        public device_id: string,
        public status: string,
        public battery_level: string,
        public product: string,
        public description: string,
        public last_position: number,
        public fleet: number
    ) {
    }
}