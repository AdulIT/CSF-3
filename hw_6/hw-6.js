class LinkedListNode
{
    constructor(value)
    {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList
{
    constructor(value)
    {
        const newNode = new LinkedListNode(value)
        this.head = newNode
        this.tail = newNode
        this.length = 0
    }

    add(value)
    {
        const newNode = new LinkedListNode(value)
        if (this.length === 0)
        {
            this.head = newNode
            this.tail = newNode
        }
        {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this;
    }


    // Удаление узла из середины списка.
    // Удаление узла из начала списка.
    // Удаление узла из конца списка.
    deleteNode(value)
    {
        let currentNode = this.head

        // если удаление в начале списка
        if (currentNode.value === value)
        {
            this.head = currentNode.next
            if (this.head)
            {
                this.head.prev = null
            }
            else
            {
                this.tail = null
            }
            this.length--
            return this
        }

        // если удаление с середины списка
        while(currentNode)
        {
            if (currentNode.value === value)
            {
                if (currentNode === this.tail)
                {
                    this.tail = currentNode.prev
                    this.tail.next = null
                }
                else
                {
                    currentNode.prev.next = currentNode.next
                    currentNode.next.prev = currentNode.prev
                }
                this.length--
                return this
            }
            currentNode = currentNode.next
        }

        console.log("Node not found in the list.");
        return this;
    }
}


const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(5);

console.log(list.head.value);           // 1
// console.log(list.tail.value);            // 5
// console.log(list.head.next.value);      // 2
// console.log(list.head.next.prev.value); // 1

list.deleteNode(6)

// console.log(list.head.value);           // 1
console.log(list.tail.value);            // 5
// console.log(list.head.next.value);      // 2
// console.log(list.head.next.prev.value); // 1