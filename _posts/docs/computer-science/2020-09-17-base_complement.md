---
layout: article
title: 진법과 보수
permalink: /computer-science/base-complement
key: computer-science
tags: cs

aside:
  toc: true
sidebar:
  nav: language-cs
---
<!--more-->
## 자료의 구성단위  
### bit (binary digit)  
- 2진수이므로 0과 1로 표현  
- nbit에 2^n가지 정보 표현  
- 정보 표현의 최소 단위  

> 2^1 = 2  
2^2 = 4  
2^3 = 8  
2^4 = 16  
2^5 = 32  
2^6 = 64  
2^7 = 128  
2^8 = 256  
2^9 = 512  
2^10 = 1,024  
2^16 = 65,536  

### nibble  
- 4개의 bit 값이 모였을 때  

### Byte  
- 8개의 bit 값이 모였을 때  
- 문자 표현의 최소 단위  

### Word  
- 컴퓨터 시스템에서 CPU가 한번에 처리하는 단위  
- 하나의 기억 공간의 크기를 결정하는 단위  

16bit(2byte)  
	: Half Word, 옛날 컴퓨터  
32bit(4byte)  
	: Full Word, 우리가 사용하는 대부분의 컴퓨터  
64bit(8byte)  
	: Double Word, 요즘 컴퓨터  

## 진법  
### 2진법  
- 2씩 묶어서 나타내는 것  
