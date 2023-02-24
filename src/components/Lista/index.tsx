import { iTarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

function Lista({tarefas}: {tarefas: Array<iTarefa>}) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        key={item.tarefa}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
