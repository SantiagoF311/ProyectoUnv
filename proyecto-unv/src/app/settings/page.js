import styles from "./settings.module.css"
import AccountSettingsForm from './components/Form';

export default function AccountSettingsPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Configuración de la Cuenta</h1>
      <AccountSettingsForm />
    </main>
  );
}
