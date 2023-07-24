export default function History({ infoList: formInfo }) {

    function totalHouers(item) {


        let total = 0;
        for (let i = 0; i < formInfo.length; i++) {
            for (let j = 0; j < formInfo[i].houers.length; j++) {
                total += formInfo[i].houers[j];
            }
        }
        return total;
    }
    function monyeHoure(index) {
        
        let total = 0;
        for (let i = 0; i < formInfo.length; i++) {

            total += formInfo[i].houers[index];

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
                    </tr>
                </thead>
                <tbody className="bg-blue-300 ">
                    {formInfo.map(item => (
                        <tr>
                            <td className="px-4 border border-black">{item.location}</td>
                            <td className="px-4 border border-black">{item.houers[0]}</td>
                            <td className="px-4 border border-black">{item.houers[1]}</td>
                            <td className="px-4 border border-black">{item.houers[2]}</td>
                            <td className="px-4 border border-black">{item.houers[3]}</td>
                            <td className="px-4 border border-black">{item.houers[4]}</td>
                            <td className="px-4 border border-black">{item.houers[5]}</td>
                            <td className="px-4 border border-black">{item.houers[6]}</td>
                            <td className="px-4 border border-black">{item.houers[7]}</td>
                            <td className="px-4 border border-black">{item.houers[8]}</td>
                            <td className="px-4 border border-black">{item.houers[9]}</td>
                            <td className="px-4 border border-black">{item.houers[10]}</td>
                            <td className="px-4 border border-black">{item.houers[11]}</td>
                            <td className="px-4 border border-black">{item.houers[12]}</td>
                            <td className="px-4 border border-black">{item.houers[13]}</td>
                            <td className="px-4 border border-black">{item.houers.reduce((a, b) => a + b, 0)}</td>
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
                    <th className="px-4 border border-black">{totalHouers()}</th>

                </tfoot>
            </table>
        )
    }
}