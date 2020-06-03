import React from 'react';

export function Main(props) {
    return (
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="cuadrante">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="cuadrante">
                    {props.num6}
                </div>
                <div class="cuadrante">
                    {props.num5}
                </div>
                <div class="dosPuntos">
                    :
                </div>
                <div class="cuadrante">
                    {props.num4}
                </div>
                <div class="cuadrante">
                    {props.num3}
                </div>
                <div class="dosPuntos">
                    :
                </div>
                <div class="cuadrante">
                    {props.num2}
                </div>
                <div class="cuadrante">
                    {props.num1}
                </div>

            </div>
        </div>

    )
} 