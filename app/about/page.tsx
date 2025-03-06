//rafce
const url = "https://jsonplaceholder.typicode.com/todos";

const fecthData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
}

type Data = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

const AboutPage = async () => {
    const data: Data[] = await fecthData();
    console.log(data);
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <li key={index}>{item.title}</li> //key คือ ตัวที่เป็น unique ในการแสดงผล unique คือ ไม่ซ้ำกัน
                )
            })}
        </div>
    )
}
export default AboutPage