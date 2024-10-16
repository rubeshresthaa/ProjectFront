import { useDispatch, useSelector } from "react-redux";
import { useGetAllContactQuery,useDeleteContactMutation } from "./contactApi";
import { removeContact } from "./contactSlice";
import { toast } from "react-toastify";

const ContactsList = () => {
const {contact}=useSelector((state)=>state.contactSlice)
  const { data: contacts, error, isLoading } = useGetAllContactQuery();
  const [deleteContact]=useDeleteContactMutation();

  const dispatch=useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading contacts</div>;
  const handleDelete=async (id)=>{
    try {
      await deleteContact(id).unwrap();
      dispatch(removeContact({_id:id}))
      toast.success('Successfully Deleted')
    } catch (err) {
      toast.error('Try Again!!')
      
    }


  }

  return (
    <div className="mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">All Contacts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contacts?.length ? (
          contacts.map((contact) => (
            <div 
              key={contact._id} 
              className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold">{contact.fullname}</h2>
              <p className="text-gray-600"><strong>Email:</strong> {contact.email}</p>
              <p className="text-gray-600"><strong>Message:</strong> {contact.subject}</p>
              <button className="bg-red-400 p-3 rounded-lg hover:bg-red-500 hover:text-white " onClick={()=>handleDelete(contact._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-normal">No contacts found</p>
        )}
        
      </div>
    </div>
  );
};

export default ContactsList;
