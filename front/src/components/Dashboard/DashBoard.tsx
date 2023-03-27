import {useState, useEffect} from 'react';
import { api } from '../../service/api';
import { Section } from './styles';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useDashContext, IPostContact, IContact, IClient, IDashContext } from "../../contexts/dashBoard.provider"
import { useForm } from 'react-hook-form';

export const DashBoard = () => {
  const { clean, isUpdating, setIsUpdating, createContact, deleteContact, contact, setContact } = useDashContext()
  const token = localStorage.getItem('@TOKEN');
  const id = localStorage.getItem('@USERID');
  const [listItems, setListItems] = useState(null);
  const [ abrirModal, setAbrirModal ] = useState(false)


  const formSchema = yup.object().shape({
    name: yup.string().required("O nome do contato é obrigatório")
})

  const { register, handleSubmit } = useForm<IContact[]>({
      resolver: yupResolver(formSchema)
  })

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    const id = localStorage.getItem('@USERID');
    if (token && id) {
      api.get(`/contacts/client/${id}`, { headers: { Authorization: `Token ${token}`} })
        .then(response => {
          setListItems(response.data);
          console.log(response.data);
        })
        .catch(error => console.log(error));
      }
  }, [])

  return (
    <Section>
      <div className="App">
        <h1>Meus contatos</h1>
        
          <button onClick={() => setAbrirModal(true)}>abrir modal</button>

        <div className="contact-listItems">
        {
          listItems?.map(item => (
            <div key={item.id} className={'divAll'}>
              {
                <>
                  <div className='all'>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.contact}</p>
                    <div className='buttons'>
                      <button className="update-item" onClick={()=>{setIsUpdating(item.id)}}>atualizar</button>
                      <button className="delete-item" onClick={() => {deleteContact(item.id)}}>deletar</button>
                    </div>
                  </div>              
                </>
              }
            </div>
          ))
        }
        </div>
      </div>

        { abrirModal && <div>
                <form onSubmit={handleSubmit(createContact)} >
                    <div>
                        <h2>Criar contato</h2>
                        <button onClick={() => setAbrirModal(false)}>x</button>
                    </div>
                    <label>Nome</label>
                    <input type="text" {...register(`${1}.name` as const)} />
                    <label>Email</label>
                    <input type="text" {...register(`${1}.email` as const)} />
                    <label>Contato</label>
                    <input type="text" {...register(`${1}.contact` as const)} />
                    <button type='submit' >Criar contato</button>
                </form>
        </div>}

    </Section>
  );
}

export default DashBoard;
