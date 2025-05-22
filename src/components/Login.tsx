import { useForm } from '@tanstack/react-form';
import { loginSchema } from '../schema/schemaAuth';
import { useLogin } from '../services/User/UserHook';
import { useNavigate } from '@tanstack/react-router';
import type { LoginData } from '../schema/schemaAuth';
import { useState } from 'react';

export default function LoginForm() {
  const navigate = useNavigate();
  const mutation = useLogin();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const form = useForm({
    defaultValues: {
      correoElectronico: '',
      password: '',
    },

    onSubmit: async ({ value }: { value: LoginData }) => {
      setFormErrors({}); 

      const validation = loginSchema.safeParse(value);

      if (!validation.success) {
        // Extraer errores y mostrarlos
        const fieldErrors: Record<string, string> = {};
        validation.error.errors.forEach((err) => {
          const field = err.path[0] as string;
          fieldErrors[field] = err.message;
        });
        setFormErrors(fieldErrors);
        return;
      }

      try {
        await mutation.mutateAsync({
          correoElectronico: value.correoElectronico,
          password: value.password,
        });
      } catch (err: unknown) {
        console.error('Error de inicio de sesión:', err);
        setFormErrors({
          general: 'Credenciales incorrectas o error en el servidor',
        });
      }

    },

  });

  return (
    <section className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="form-container"
      >
        <div>
          <h1 className="Regard">INICIA SESIÓN</h1>
        </div>

        <form.Field name="correoElectronico">
          {(field) => (
            <>
              <input
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Correo electrónico"
              />
              {field.state.meta.errors?.map((err, i) => (
                <p key={i} className="error">{err}</p>
              ))}
              {formErrors.correoElectronico && (
                <p className="error">{formErrors.correoElectronico}</p>
              )}
            </>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <>
              <input
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Contraseña"
              />
              {field.state.meta.errors?.map((err, i) => (
                <p key={i} className="error">{err}</p>
              ))}
              {formErrors.password && (
                <p className="error">{formErrors.password}</p>
              )}
            </>
          )}
        </form.Field>

        {formErrors.general && <p className="error">{formErrors.general}</p>}

        <div className="button-group">
          <button
            type="button"
            onClick={() => navigate({ to: '/Register' })}
          >
            Registrarse
          </button>
          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </div>
      </form>
    </section>
  );
}
