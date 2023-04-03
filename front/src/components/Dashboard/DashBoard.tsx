import {useState, useEffect} from 'react';
import { api } from '../../service/api';
import { Section } from './styles';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export interface IClient {
  id: string;
  name: string;
  email: string;
  contact: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
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

export interface IPostContact {
  name: string;
  email: string;
  contact: string;
}

export const DashBoard = () => {
  const token = localStorage.getItem('@TOKEN');
  const id = localStorage.getItem('@USERID');
  const [listItems, setListItems] = useState(null);
  const [ client, setClient ] = useState(null)
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ abrirModal, setAbrirModal ] = useState(false)
  const [ abrirModalEditar, setAbrirModalEditar ] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', id: '' })
  const navigate = useNavigate()
  const formSchema = yup.object().shape({
    name: yup.string().required("O nome do contato é obrigatório")
  })

  const { register, handleSubmit } = useForm<IPostContact>({
      resolver: yupResolver(formSchema)
  })

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    const id = localStorage.getItem('@USERID');
    if (token && id) {
      api.get(`/contacts/client/${id}`, { headers: { Authorization: `Token ${token}`} })
        .then(response => {
          console.log(response.data);
          setFormData(response.data)
          setListItems(response.data);
        })
        .catch(error => console.log(error));

        api.get(`/clients/${id}`, { headers: { Authorization: `Token ${token}`} })
        .then(response => {
          console.log(response.data);
          setClient(response.data);
        })
        .catch(error => console.log(error));
      }
  }, [])


  const createContact = async (data: IContact) => {
    try {
        await api.post(`/contacts/${id}`, data, {
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
        setListItems(data)
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

  const deleteContact = async (id: string) => {
    try{
      await api.delete(`/contacts/${id}`, { headers: { Authorization: `Token ${token}`}})
      const newListItems = listItems.filter(item => item.id !== id);
      console.log(newListItems);
      setListItems(newListItems);
      console.log(newListItems);
    }catch(err){
      console.log(err);
    }
  }
  
  const handleEdit = (id, data) => {
    if(token && id){
      updateContact(id, data)
    }
    setAbrirModalEditar(true)
    setFormData(data);
  };


  const updateContact = async (id, body) => {
    try {
      await api.patch<IContact[] | string>(
        `/contacts/${id}`,
        body,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      const updatedItemIndex = listItems.findIndex((item) => item.id === formData.id);
      const updatedItem = { ...listItems[updatedItemIndex], ...body };
      console.log(updatedItem);
      const updatedItems = [...listItems];
      updatedItems[updatedItemIndex] = updatedItem;
      
      setListItems(updatedItems);
      /* setIsUpdating(null); */
    } catch (err) {
      console.log(err);
    }
  };

  const deleteClient = async (id: string) => {
    try{
      await api.delete(`/clients/${id}`, { headers: { Authorization: `Token ${token}`}})
      setClient([]);
      localStorage.clear()
      navigate("/")
    }catch(err){
      console.log(err);
    }
  }  

      const handleMenuClick = () => {
          setIsMenuOpen(!isMenuOpen);
      }
  
      useEffect(() => {
          const handleResize = () => {
              if (window.innerWidth <= 768) {
                  setIsMenuOpen(false);
              }
          }
          window.addEventListener('resize', handleResize);
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);
  
  
    
    return (
      <>
    <Section className="All">
        <nav className="nav">
            <div className="profile">
                <h2>{client?.name}</h2>
      <button onClick={() => deleteClient(client?.id)}>deletar conta</button>
            </div>
        </nav>
      <div className='infos'>
        <h1>Meus contatos</h1>
        <button onClick={() => setAbrirModal(true)}>Novo contato</button>

        <div className="contact-listItems">
        {
          Array.isArray(listItems) && listItems?.map((item: any) => (
            item.isActive ? (
              <div key={item.id} className={'divAll'}>
                {<>
                        <div className='all'>
                          <p>{item.name}</p>
                          <p>{item.email}</p>
                          <p>{item.contact}</p>
                          <div className='buttons'>
                            <button className="update-item" onClick={() => handleEdit(item.id, item)}>atualizar</button>
                            <button className="delete-item" onClick={() => deleteContact(item.id)}>deletar</button>
                          </div>
                        </div>
                      </>
                    
                }
              </div>
            ) : <></>
            ))
          }

      { abrirModalEditar && <div>
          <form onSubmit={handleSubmit(handleEdit)}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <button type="submit">Salvar</button>
          </form>
      </div> }

      { isMenuOpen && <div>
        <button id="hamburguer" onClick={handleMenuClick}>Abrir menu</button>
        <div id="navegador" className={`${isMenuOpen ? 'listas' : ''} ${isMenuOpen ? 'filters' : ''}`}>
          <ul>
              <li>{client?.email}</li>
              <li>{client?.contact}</li>
          </ul>
        </div>
      </div> }


      { abrirModal && <div className='editarModal'>
                <form onSubmit={handleSubmit(createContact)} >
                    <div>
                        <h2>Criar contato</h2>
                        <button onClick={() => setAbrirModal(false)}>x</button>
                    </div>
                    <label>Nome</label>
                    <input type="text" {...register("name")} />
                    <label>Email</label>
                    <input type="text" {...register("email")} />
                    <label>Contato</label>
                    <input type="text" {...register("contact")} />
                    <button type='submit' >Criar contato</button>
                </form>
        </div> }
      </div>

      </div>
  </Section>
  </>
  );
}

export default DashBoard;
