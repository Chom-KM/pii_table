import JsonData from '../assets/pii.json'


 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr className='focus:bg-pink-200 focus:font-bold hover:bg-pink-200 hover:font-bold' key={''}>
                    <td className='w-1/4 border border-gray-300 p-4 text-gray-900'>{info['Group PII']}</td>
                    <td className='w-1/2 border border-gray-300 p-4 text-gray-900'>{info.PII}</td>
                    <td className='w-1/2 border border-gray-300 p-4 text-gray-900'>{info['ENISA\'s Group PII']}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table className="w-full border-collapse border border-gray-400 text-sm dark:border-gray-500 dark:bg-gray-800 table-auto   ">
                <thead className='bg-gray-50 dark:bg-gray-700'>
                    <tr>
                        <th className='text-lg w-1/4 bg-gray-200 border border-gray-300 p-5 font-semibold text-gray-900'>Group PII</th>
                        <th className='text-lg w-1/2 bg-gray-200 border border-gray-300 p-5 font-semibold text-gray-900'>PII</th>
                        <th className='text-lg w-1/2 bg-gray-200 border border-gray-300 p-5 font-semibold text-gray-900'>ENISA's Group PII</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }

 export default JsonDataDisplay;
