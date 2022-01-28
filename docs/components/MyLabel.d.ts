/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Esta es el tamaño de la fuente
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * convierte todas la plabra al capitalizadas
     */
    allCaps?: boolean;
    /**
     * Escoge el tipo de color de la fuente
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Escoge el tipo de color de la fuente personalizado
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
