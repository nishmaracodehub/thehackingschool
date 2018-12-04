function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(prev,value,next){
    this.prev = prev;
    this.value = value;
    this.next = next;
}

//add to head

LinkedList.prototype.addToHead = function(value){
    let newNode = new Node(null,value,this.head);

    if(this.head){
        this.head.prev = newNode;
    }
    else{
        this.tail = newNode;
    }

    this.head = newNode;
};

//add to tail

LinkedList.prototype.addToTail = function(value){
    let newNode = new Node(this.tail,value,null);

    if(this.tail){
        this.tail.next = newNode;
    }
    else{
        this.head = newNode;
    }

    this.tail = newNode;
}

var obj = new LinkedList();
var obj1 = new LinkedList();
obj.addToHead(2);
console.log(obj);
obj1.addToTail(3);
console.log(obj1);