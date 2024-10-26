import { useNavigate } from "react-router-dom"

const NextHome = () => {
  const nav=useNavigate();
  return (
    <div>
        <div className="flex flex-col p-40 space-y-8">
      <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Dog Breed</h1>
      <p>Find yourself a perfect friend from a wide variety of choices.</p>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="space-y-2">
          <img src="https://images.unsplash.com/photo-1447029080250-270ded608d91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-40 h-40 rounded-full" />
          <p className="font-bold p-3 text-center">Golden Retriver</p>
        </div>
        <div className="space-y-2">
          <img src="https://plus.unsplash.com/premium_photo-1667727015862-29d560c59816?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-40 h-40 rounded-full" />
          <p className="font-bold p-3 text-center">Husky</p>
        </div>
        <div className="space-y-2">
          <img src="https://images.unsplash.com/photo-1517982990603-1d52f060fe6a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-40 h-40 rounded-full" />
          <p className="font-bold p-3 text-center">Pitbull</p>
        </div>
        <div className="space-y-2">
          <img src="https://images.unsplash.com/photo-1649571068845-31e82992f2c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-40 h-40 rounded-full" />
          <p className="font-bold p-3 text-center">German Shepherd</p>
        </div>
        <div className="space-y-2">
          <img src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-40 h-40 rounded-full" />
          <p className="font-bold p-3 text-center">Pug</p>
        </div>
        <div className="space-y-2">
          <img src="https://images.unsplash.com/photo-1710125368147-2175d5c3d551?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-40 h-40 rounded-full" />
          <p className="font-bold p-3 text-center">Japanese Spitz</p>
        </div>
        <div className="space-y-2">
          <img src="https://media.istockphoto.com/id/1251033537/photo/portrait-of-a-blond-labrador-retriever-dog-looking-at-the-camera-with-a-big-happy-smile.jpg?s=2048x2048&w=is&k=20&c=xn_YHsbj3pIinOSLc3CZu06rQrPFEkWrRaPDxbUQzOE=" alt="" className="w-40 h-40 rounded-full" />
          <p className="font-bold p-3 text-center">Labrador</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-6 space-y-10">
          <h1 className="text-3xl font-bold">Pet Products</h1>
          <p>Pet products encompass a wide range of items designed to enhance the well-being and happiness of pets. From nutritious food and treats to toys that promote physical activity and mental stimulation, these products cater to the diverse needs of various animals, including dogs, cats, birds, and small mammals</p>
          <button className="p-3 w-28 bg-[#ff9900] rounded-2xl text-white hover:bg-[#ffe0b3] hover:text-black outline-none" onClick={()=>nav('/accessories')}>
           See More
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 p-6">
          <img src="https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          
         
          

        </div>
      </div>
    </div>

    </div>
  
  )
}
export default NextHome