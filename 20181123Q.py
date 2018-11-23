#Question 1
sentence = "Interviews are awesome!"
words = sentence.split();
sentence_rev = " ".join(reversed(words));
print (sentence_rev);

#Question2
import statistics
arrayList=[1,8,6,5]
mid= statistics.median(arrayList);
print(mid);

#Question 3
word_list = 'hello your hello what is your name i am bob this is a sentence a very nice sentence'

text=word_list.split()
print (text)

search=['hello','name','your']
for x in search:
    for counter, value in enumerate(text):
        if value ==x:
            print("the search word is",value,"at position",counter)

