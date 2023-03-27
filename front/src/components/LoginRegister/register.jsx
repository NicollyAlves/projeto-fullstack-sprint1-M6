import { useContext, useState } from 'react';
import { Div } from './styles';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { formSchemaRegister } from '../../validations/registerUser';
import { api } from '../../service/api';
import { toast } from 'react-toastify';

export const Register = () => {
    
    const [ativa, setAtiva] = useState(false);
    const [user, setUser] = useState();

    async function registerUser(data) {
        try {
            const response = await api.post('/clients', data)
    
            setUser(response)
            
            toast.success("Cadastro realizado com sucesso", {
                autoClose: 2000,
                style: {backgroundColor:"#344136",
                        color:"white",
                        borderRadius:"5px", 
                        }
            })
            return response
    
        } catch (error) {
            console.error(error);
        }
    }
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchemaRegister)
    }) 

  return (
    <Div>
      <div className={`container ${ativa ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit(registerUser)}>
            <h1>Crie sua conta</h1>
            <input type="text" placeholder="Name" {...register("name")} />
            <span>{errors.name?.message}</span>
            <input type="email" placeholder="Email" {...register("email")} />
            <span>{errors.email?.message}</span>
            <input type="number" placeholder="Contact" {...register("contact")} />
            <span>{errors.contact?.message}</span>
            <input type="password" placeholder="Password" {...register("password")}/>
            <span>{errors.password?.message}</span>
            <input type="password" placeholder="Password Confirm" {...register("confirmpassword")}/>
            <span>{errors.confirmpassword?.message}</span>
            <button type='submit'>Cadastrar</button>
          </form>
        </div>
        </div>
    </Div>
  );
}
