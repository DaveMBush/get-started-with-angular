import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import { Component, ElementRef, ExistingProvider, forwardRef, OnInit, ViewChild } from '@angular/core';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line:no-use-before-declare
  useExisting: forwardRef(() => TextInputComponent),
  multi: true
};

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input: HTMLInputElement;
  _value: string;
  inputId: string;
  _onChange: Function = () => {};
  _onBlur: Function = () => {};

  constructor(elementRef: ElementRef) {
    this.inputId = elementRef.nativeElement.id + '-input';
  }

  ngOnInit(): void {
  }

  writeValue(obj: string): void {
    this._value = obj;
  }

  set value(v: string) {
    if(v !== this._value) {
      this._value = v;
      this._onChange(v);
    }
  }

  get value(): string {
    return this._value;
  }

  registerOnChange(fn: Function): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this._onBlur = fn;
  }

  onBlur(): void {
    this._onBlur();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.input.disabled = isDisabled;
  }
}
