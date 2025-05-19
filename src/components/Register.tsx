import { useForm } from '@tanstack/react-form';
import { registerSchema } from '../schema/schemaAuth';
import { useRegister } from '../services/User/UserHook/UserHook';
import { useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import type { RegisterFormFields } from '../schema/schemaAuth';

export default function RegisterForm() {
  const router = useRouter();
  const mutation = useRegister();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const form = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      correoElectronico: '',
      password: '',
    },

    onSubmit: async ({ value }: { value: RegisterFormFields }) => {
      setFormErrors({});
      const validation = registerSchema.safeParse(value);

      if (!validation.success) {
        const fieldErrors: Record<string, string> = {};
        validation.error.errors.forEach((err) => {
          const field = err.path[0] as string;
          fieldErrors[field] = err.message;
        });
        setFormErrors(fieldErrors);
        return;
      }

      try {
        await mutation.mutateAsync(value);
      } catch (err) {
        console.error('Error durante el registro:', err);
        if (err instanceof Error) {
          setFormErrors({ general: `Error al registrarse: ${err.message}` });
        } else {
          setFormErrors({ general: 'Error al registrarse. Inténtelo nuevamente.' });
        }
      }
    },
  });

  return (
    <section className="register">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="form-container"
      >
        <div>
          <h2>ÚNETE</h2>
        </div>

        <form.Field name="nombre">
          {(field) => (
            <>
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Nombre"
              />
              {field.state.meta.errors?.map((err, i) => (
                <p key={i} className="error">{err}</p>
              ))}
              {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
            </>
          )}
        </form.Field>

        <form.Field name="apellido">
          {(field) => (
            <>
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Apellido"
              />
              {field.state.meta.errors?.map((err, i) => (
                <p key={i} className="error">{err}</p>
              ))}
              {formErrors.apellido && <p className="error">{formErrors.apellido}</p>}
            </>
          )}
        </form.Field>

        <form.Field name="correoElectronico">
          {(field) => (
            <>
              <input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Email"
              />
              {field.state.meta.errors?.map((err, i) => (
                <p key={i} className="error">{err}</p>
              ))}
              {formErrors.correoElectronico && <p className="error">{formErrors.correoElectronico}</p>}
            </>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <>
              <input
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Contraseña"
              />
              {field.state.meta.errors?.map((err, i) => (
                <p key={i} className="error">{err}</p>
              ))}
              {formErrors.password && <p className="error">{formErrors.password}</p>}
            </>
          )}
        </form.Field>

        {formErrors.general && <p className="error">{formErrors.general}</p>}

        <div className="button-group">
          <button
            type="button"
            onClick={() => router.navigate({ to: "/Login" })}
          >
            Iniciar Sesión
          </button>
          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Cargando..." : "Registrarse"}
          </button>
        </div>
      </form>
    </section>
  );
}
