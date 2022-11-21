import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CartComponent } from './cart.component';
import { BookService } from 'src/app/services/book.service';

describe('Cart Component', () => {

    let component:CartComponent;
    let fixture: ComponentFixture<CartComponent>; //"Accesorios del Componente"

    //CONFIGURACIÓN DEL TEST
    beforeEach( () => {
        TestBed.configureTestingModule({ //"parecido" al Módulo que contiene el Componente
            declarations:[
                CartComponent //Componente a Testear
            ], 
            imports: [
                HttpClientTestingModule //El Componente no hace peticiones http, pero usa un Servicio que SI las hace
            ],
            providers:[
                BookService // Servicios que utiliza el Componente
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    });

    //INSTANCIA DEL TEST
    beforeEach( () => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance; 
        fixture.detectChanges(); //Para que entre por el OnInit
    });

    //TEST UNITARIOS
    it('should create', ()=>{
        expect(component).toBeTruthy();
    });

});