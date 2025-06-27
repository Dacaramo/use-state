import {
  BTN_CLASSES,
  H1_CLASSES,
  H2_CLASSES,
  SECTION_CLASSES,
} from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className={H1_CLASSES}>Ejemplos de useState</h1>
      <section className={SECTION_CLASSES}>
        <h2 className={H2_CLASSES}>Ejemplos guardando primitivas</h2>
        <Link
          href='/state-variable-vs-normal-variable'
          className={BTN_CLASSES}
        >
          Variable de estado VS variable normal
        </Link>
        <Link
          href='/toggle-button'
          className={BTN_CLASSES}
        >
          Botón tipo switch
        </Link>
        <Link
          href='/alert'
          className={BTN_CLASSES}
        >
          Alerta
        </Link>
        <Link
          href='/tabs'
          className={BTN_CLASSES}
        >
          Tabs
        </Link>
        <Link
          href='/single-field-form'
          className={BTN_CLASSES}
        >
          Formulario de un solo campo
        </Link>
      </section>
      <section className={SECTION_CLASSES}>
        <h2 className={H2_CLASSES}>Ejemplos guardando objetos</h2>
        <Link
          href='/multi-field-form'
          className={BTN_CLASSES}
        >
          Formulario de varios campos
        </Link>
        <Link
          href='/api-request'
          className={BTN_CLASSES}
        >
          Solicitud HTTP
        </Link>
        <Link
          href='/filters'
          className={BTN_CLASSES}
        >
          Filtros
        </Link>
      </section>
      <section className={SECTION_CLASSES}>
        <h2 className={H2_CLASSES}>Ejemplos guardando arreglos</h2>
        <Link
          href='/todo-list'
          className={BTN_CLASSES}
        >
          Lista de tareas
        </Link>
        <Link
          href='/dynamic-form'
          className={BTN_CLASSES}
        >
          Formulario dinámico
        </Link>
      </section>
      <section className={SECTION_CLASSES}>
        <h2 className={H2_CLASSES}>Ejemplos integrales</h2>
        <Link
          href='/integral-1'
          className={BTN_CLASSES}
        >
          Lista dinámica + Solicitud HTTP + Alerta
        </Link>
      </section>
    </>
  );
}
