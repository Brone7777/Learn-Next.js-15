'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const createCamps = async (prevState: any, formData: FormData) => {
    // const title = formData.get('title')
    // const location = formData.get('location')
    const rawdata = Object.fromEntries(formData)//คือการแปลงข้อมูลจาก formData เป็น object
    // console.log(title, location)
    console.log(rawdata.title, rawdata.location)
    //prisma.camp.create()
    // revalidatePath('/camp')//revalidatePath คือการ refresh หน้าเว็บ อัปเดตข้อมูลใหม่
    //redirect('/camp');//redirect คือการเปลี่ยนหน้าไปยังหน้าที่เราต้องการ
    return 'create camps success!'
}

export const fetchCamp = async () => {
    // db.camp.findMany({})
    const camps = [
        { id: 1, title: "Route 3060" },
        { id: 2, title: "Korat" },
        { id: 3, title: "Phuket" },
        { id: 4, title: "Chiang Mai" },
    ];

    return camps;
};