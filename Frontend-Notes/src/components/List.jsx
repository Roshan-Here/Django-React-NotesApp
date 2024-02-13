var tags = ['user1','user2','user3','user4','user5','user6']
// var tags = []

function List() {
  return (
    <div className="max-w-sm mx-auto my-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
                 { tags.length === 0 && <p className="text-red-700 text-3xl">"create a new tag"</p> } 
                        {renderList()}
            </ul>
            <button onClick={handleOnClick()} className="m-2 text-green-600" type="button">hii</button>
        </div>
    </div>
  )
}

export default List


function handleOnClick(){
    let cc = 0
    console.log("clicked")
}



const lisst = () =>
        tags.map(tag=>
        <li className="p-3 flex justify-between items-center user-card" key={tag}>
            <div className="flex items-center">
                <span className="ml-3 font-medium">{tag}</span>   
            </div>
        </li>
        )


const renderList = () =>{
    if (tags.length ===0){
        return <p className="text-blue-500 text-3xl">"no Elements on list"</p>
    } 
    else{
        return lisst()
    }

}