import { getImgProps } from "next/dist/shared/lib/get-img-props";

export default function History({ infoList: formInfo , infodelete}) {

    function totalhourly_sales(item) {


        let total = 0;
        for (let i = 0; i < formInfo.length; i++) {
            for (let j = 0; j < formInfo[i].hourly_sales.length; j++) {
                total += formInfo[i].hourly_sales[j];
            }
        }
        return total;
    }
    function monyeHoure(index) {
        
        let total = 0;
        for (let i = 0; i < formInfo.length; i++) {

            total += formInfo[i].hourly_sales[index];

        }
        return total;
    }

    if (formInfo.length == 0) {
        return (
            <h3 className="w-1/2 mx-auto my-8 text-2xl text-center"> No questions have been asked : </h3>
        )
    }
    else {
        return (
            <table className="flex-auto m-8 bg">
                <thead className="bg-blue-500 " >
                    <tr>
                        <th className="px-4 border border-black">Location</th>
                        <th className="px-4 border border-black">6am</th>
                        <th className="px-4 border border-black">7am</th>
                        <th className="px-4 border border-black">8am</th>
                        <th className="px-4 border border-black">9am</th>
                        <th className="px-4 border border-black">10am</th>
                        <th className="px-4 border border-black">11am</th>
                        <th className="px-4 border border-black">12pm</th>
                        <th className="px-4 border border-black">1pm</th>
                        <th className="px-4 border border-black">2pm</th>
                        <th className="px-4 border border-black">3pm</th>
                        <th className="px-4 border border-black">4pm</th>
                        <th className="px-4 border border-black">5pm</th>
                        <th className="px-4 border border-black">6pm</th>
                        <th className="px-4 border border-black">7pm</th>
                        <th className="px-4 border border-black">Totals</th>
                        <th className="px-4 border border-black">Deletion</th>
                    </tr>
                </thead>
                <tbody className="bg-blue-300 ">
                    {formInfo.map(item => (
                        <tr key = {item.id}>
                            
                            <td className="px-4 border border-black">{item.location}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[0]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[1]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[2]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[3]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[4]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[5]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[6]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[7]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[8]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[9]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[10]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[11]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[12]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales[13]}</td>
                            <td className="px-4 border border-black">{item.hourly_sales.reduce((a, b) => a + b, 0)}</td>
                            <td className="px-4 border border-black"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"  onClick={()=>infodelete(item.id)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg> </td>
                           

                        </tr>

                    ))


                    }

                </tbody>
                <tfoot className="bg-blue-500 ">
                    <th className="px-4 border border-black">Totals</th>
                    <th className="px-4 border border-black">{monyeHoure(0)}</th>
                    <th className="px-4 border border-black">{monyeHoure(1)}</th>
                    <th className="px-4 border border-black">{monyeHoure(2)}</th>
                    <th className="px-4 border border-black">{monyeHoure(3)}</th>
                    <th className="px-4 border border-black">{monyeHoure(4)}</th>
                    <th className="px-4 border border-black">{monyeHoure(5)}</th>
                    <th className="px-4 border border-black">{monyeHoure(6)}</th>
                    <th className="px-4 border border-black">{monyeHoure(7)}</th>
                    <th className="px-4 border border-black">{monyeHoure(8)}</th>
                    <th className="px-4 border border-black">{monyeHoure(9)}</th>
                    <th className="px-4 border border-black">{monyeHoure(10)}</th>
                    <th className="px-4 border border-black">{monyeHoure(11)}</th>
                    <th className="px-4 border border-black">{monyeHoure(12)}</th>
                    <th className="px-4 border border-black">{monyeHoure(13)}</th>
                    <th className="px-4 border border-black">{totalhourly_sales()}</th>
                    <th className="px-4 border border-black">Deletion</th>

                </tfoot>
            </table>
        )
    }
}