function Table(){

let rows = [
    {name : "Cam Test", url : "https://www.test.com"},
    {name : "Cam Test 2", url : "https://www.test2.com"},
    {name : "Cam Test 3", url : "https://www.test3.com"},
].map((data)=>{
  return(
    <tr>
      <td>[data.name]</td>
      <td>[data.url]</td>

    </tr>
  )
})

   
    return (
      <table>
        <thread>
          <tr>
          <th>Link Name</th>
          <th>Link URL</th>
      
        </tr>
        </thread>
        <tbody>
       {rows}
      </tbody>

      </table>
    )
  }

  export default Table;