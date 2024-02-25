import cn from 'classnames';
import { useCallback } from 'react';
import { Icon, IconName } from '../Icon';
import styles from './styles.module.scss';

interface Props {
    className?: string;
    selectable?: boolean;
    selected?: boolean;
    children: React.ReactNode,
    indicator?: React.ReactNode,

    onSelected?: (selected: boolean) => void
}

export const Card: React.FC<Props> = ({ className, children, selectable, selected, onSelected }) => {

    const renderIndicator = useCallback(() => {
        return <div style={{ position: 'absolute', right: 0, top: 0, marginTop: 16, marginRight: 24 }}>{
            selectable && selected? <div><Icon name={IconName.greenCheck} /></div>: <div style={{ width: 22, height: 22, borderRadius: '100%', border: '1px solid black' }}></div>
        }</div>
    }, [selectable, selected]);

    return (<div onClick={() => onSelected?.(!selected)} className={cn(styles.Card, { [styles['Card--selected']] : selected }, className)}>
        {selected !== undefined && renderIndicator()}
        {children}
    </div>)
}