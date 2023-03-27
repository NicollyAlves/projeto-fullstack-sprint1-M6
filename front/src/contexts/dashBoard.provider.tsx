import { useState, createContext, useEffect, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast }  from "react-toastify";
import { api } from "../service/api";

export interface IChildren {
    children: ReactNode
}

export interface IContact {
    id: string;
    name: string;
    email: string;
    contact: string,
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IClient {
    id: string;
    name: string;
    email: string;
    contact: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    contacts: IContact[]
}

export interface IDashContext {
    clean(): void,
    deleteContact(id: string): Promise<void>,
    createContact(data: IContact[]): Promise<void>,
    //updateContact(data: IContact)
    contact: null,
    abrirModal: boolean,
    isUpdating: string,
    setIsUpdating: React.Dispatch<React.SetStateAction<string>>,
    setAbrirModal: React.Dispatch<React.SetStateAction<boolean>>
    setContact: React.Dispatch<React.SetStateAction<null>>
}

export interface IPostContact{
    name: string,
    email: string,
    contact: string
}

export const DashContext = createContext<IDashContext>({} as IDashContext)

export const ProviderDash = ({children}: IChildren) => {
    const token = localStorage.getItem("@TOKEN")
    const id = localStorage.getItem('@USERID');

    const [ abrirModal, setAbrirModal ] = useState(false)
    const [contact, setContact] = useState(null)
    const [listItems, setListItems] = useState(null);
    const [isUpdating, setIsUpdating] = useState('');
    const [ remove, setRemove ] = useState([])
    const [ update, setUpdate ] = useState();
    
    const navigate = useNavigate()
    
    const clean = () => {
        localStorage.clear()
        navigate("/") 
    }

    useEffect(() => {
        if (token && id) {
            api.get(`/contacts/client/${id}`, { headers: { Authorization: `Token ${token}`} })
            .then(response => {
                setContact(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error));
        }
    }, []);
    
    const createContact = async (data: IContact[]) => {
        try {
            const res: IContact = await api.post(`/contacts/${id}`, data, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            setAbrirModal(false)
            toast.success("Contato criado com sucesso!", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                color:"white",
                borderRadius:"5px", 
            }
            
        })
            setIsUpdating(res.id)
            setContact(data)
        } catch (error) {
            toast.error("Ops! Algo deu errado", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                color:"white",
                        borderRadius:"5px", 
                    }
                })
                console.error(error);
        }
    }

    /* const deleteContact = async (id: string) => {
        try{
            await api.delete(`/contacts/${id}`, {
                headers: { 
                    Authorization: `Token ${token}`
                }
            })
            setRemove([])
        }catch(err){
            console.log(err);
        }
    } */

    const deleteContact = async (id: string) => {
      try{
        await api.delete(`/contacts/${id}`, { headers: { Authorization: `Token ${token}`}})
        const newListItems = listItems.filter(item => item._id !== id);
        setListItems(newListItems);
      }catch(err){
        console.log(err);
      }
    }
    /* const updateContact = async (data: IContact, id: string) => {
        try{
            const res: IContact[] = await api.patch<IContact[] | string>(`/contacts/${id}`, data, { 
                headers: { 
                    Authorization: `Token ${token}`
                } 
            })
          const updatedItemIndex: number = contact.findIndex(item => item.id === isUpdating);
          const updatedItem = contact[updatedItemIndex] = updateContact;
          setUpdate(data, id);
          setIsUpdating(updatedItem);
        }catch(err){
          console.log(err);
        }
      } */

    return (
        <DashContext.Provider value={{
                                        abrirModal, setAbrirModal, contact, setContact
                                        , setIsUpdating, isUpdating, clean, createContact, deleteContact}} >
            {children}
        </DashContext.Provider>
    )
}

export function useDashContext(): IDashContext {
    const context = useContext(DashContext)
    return context
}






