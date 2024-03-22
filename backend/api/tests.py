from django.test import TestCase
from pyston import PystonClient,File
import asyncio
# Create your tests here.


lang = "go"
code = """
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
"""

async def wow(lang,code):
    client = PystonClient()
    output = await client.execute(lang,[File(code)])
    print(output)
    
loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)

loop.run_until_complete(wow(lang,code))