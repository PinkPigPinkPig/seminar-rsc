import { Tour } from "@/data/tourModel"

export const addTourToDB = async (data: any) => {
  await Tour.create(data)
}
