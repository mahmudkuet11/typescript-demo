import {Test1} from './test1';
import {Test2} from './test2';

export class Blog{

	private test1:Test1;
	private test2:Test2;

	constructor(){
		this.test1 = new Test1();
		this.test2 = new Test2();
	}

	public init(){
		this.test1.print();
		this.test2.print();
		this.test2.print_test1();
	}
}