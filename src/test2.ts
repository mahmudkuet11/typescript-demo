import {Test1} from './test1';

export class Test2{

	private test1:Test1;

	constructor(){
		this.test1 = new Test1();
	}

	public print(){
		console.log('in test 2');
	}

	public print_test1(){
		this.test1.print();
	}
}