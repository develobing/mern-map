import mongoose from 'mongoose';
import { Info } from '../types/infos';

const Schema = mongoose.Schema;

const InfoSchema = new Schema<Info>({
  id: { type: Number, required: true },
  placeName: { type: String, required: true },
  addressName: { type: String, required: true },
  position: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});

const InfoModel = mongoose.model<Info>('Info', InfoSchema);

export default InfoModel;
