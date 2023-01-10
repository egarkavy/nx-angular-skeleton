/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageBusService {
    private readonly busDict: Record<string, any> = {};

    public getBus(key: string): Subject<any> {
        if (!this.busDict[key]) {
            this.busDict[key] = new Subject<any>();
        }

        return this.busDict[key];
    }
}
