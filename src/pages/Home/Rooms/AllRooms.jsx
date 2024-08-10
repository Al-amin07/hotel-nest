import { useState } from "react";
import Rooms from "../../../components/Home/Rooms";
import Searching from "../Searching";


const AllRooms = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('');
    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        console.log(text)
        setSearch(text)
      }
    return (
        <div>
            <Searching handleSearch={handleSearch} setSearch={setSearch} />
            <Rooms search={search}/>
        </div>
    );
};

export default AllRooms;