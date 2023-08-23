import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";


const ContactList = () => {
    const {contactList, keyword} = useSelector(state=>state)
    console.log(contactList);
    let [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        if(keyword !== ""){
            let list = contactList.filter((item)=> item.name.includes(keyword));
            setFilteredList(list);
        } else {
            setFilteredList(contactList);
        }
    },[keyword])

    return (
        <div>
            <SearchBox/>
            <div>
                num: {filteredList.length}
            {
                filteredList.map((item) => <ContactItem item3={item}/>)
            }
            </div>
            

        </div>
    );
}

export default ContactList;