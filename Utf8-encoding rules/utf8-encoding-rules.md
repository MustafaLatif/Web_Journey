## For 1 byte character
`0xxxxxxx`

## For 2 bytes character
`110xxxxx 10xxxxxx`


## For 3 bytes character
`1110xxxx 10xxxxxx 10xxxxxx`

## For 4 bytes character
`11110xxx 10xxxxxx 10xxxxxx 10xxxxxx`

UTF-8 Vs UTF-16 
	The full form of UTF is Unicode Transformation format
	UTF-8 encoding takes 0 Byte
	UTF-16 has 2 variants (LE and BE) It takes 2 Byte by default. And take 16 Bits to store
	It don't use headers for determining the variable byte. Hence it is faster in calculation

	UTF-8 is memory efficient.
which cpu proceesor is better ? 32bit or 64bit?
ChatGPT said:
ChatGPT
A 64-bit processor is generally better than a 32-bit processor, but the choice depends on your needs and the compatibility of your software. Here's a breakdown of the differences:

1. Addressable Memory
32-bit processors: Can address a maximum of 4GB of RAM.
64-bit processors: Can address virtually unlimited RAM (the theoretical limit is in exabytes, far beyond any practical need).
If you need more than 4GB of RAM for tasks like video editing, gaming, or running virtual machines, a 64-bit processor is essential.

2. Processing Power
32-bit processors: Handle data in 32-bit chunks. This is fine for basic tasks like web browsing, office work, or lightweight applications.
64-bit processors: Process data in 64-bit chunks, allowing for faster computation and the ability to handle larger and more complex data sets. They are ideal for demanding tasks such as gaming, 3D modeling, scientific simulations, and large-scale databases.
3. Software Compatibility
32-bit processors: Limited to running 32-bit operating systems and applications.
64-bit processors: Can run both 64-bit and 32-bit software (as long as the operating system supports it). This gives more flexibility.
4. Future-Proofing
The tech world is moving toward 64-bit as the standard. Many modern applications and operating systems are optimized for 64-bit processors, and some no longer support 32-bit systems.
Summary
Choose 64-bit processors if you want better performance, the ability to use more memory, and compatibility with modern software.
A 32-bit processor is suitable only for very basic tasks or if you're using older software that doesn't support 64-bit.
For most people today, a 64-bit processor is the clear choice.