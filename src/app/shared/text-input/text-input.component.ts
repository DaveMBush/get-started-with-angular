import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    ExistingProvider,
    forwardRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input: HTMLInputElement;
  _value: string;
  // tslint:disable-next-line:no-input-rename
  @Input('id') inputId: string;
  constructor(elementRef: ElementRef) {
    this.inputId = elementRef.nativeElement.id = '-input'
  }
  _onChange: Function = () => { };
  _onBlur: Function = () => { };

  ngOnInit(): void {
  }

  writeValue(obj: string): void {
    this._value = obj;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this._onChange(v);
    }
  }

  get value(): string {
    return this._value;
  }

  registerOnChange(fn: Function):
    void {
    this._onChange = fn;
  }

  registerOnTouched(fn: Function):
    void {
    this._onBlur = fn;
  }

  onBlur(): void {
    this._onBlur();
  }

  setDisabledState(isDisabled: boolean): void {
    this.input.disabled = isDisabled;
  }

}
