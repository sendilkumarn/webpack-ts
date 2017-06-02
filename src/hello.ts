class Greeter {
    
    constructor() {
        
    }

	byteSize (base64String: string) {
        return this._formatAsBytes(this._size(base64String));
    }

    private _endsWith(suffix: string, str: string): boolean {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    private _paddingSize(value: string): number {
        if (this._endsWith('==', value)) {
            return 2;
        }
        if (this._endsWith('=', value)) {
            return 1;
        }
        return 0;
    }

    private _size(value: string): number {
        return value.length / 4 * 3 - this._paddingSize(value);
    }

    private _formatAsBytes(size: number): string {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    }
}

let greeter = new Greeter();
