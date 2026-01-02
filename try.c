extern void print_num(int x);
extern void setStyleAttribute(const char *element, int elementSize, const char *attribute, int attributeSize, const char *value, int valueSize);

int add(int x, int y) {
    // print_num(x + y);
    return x + y;
}

int len(const char *str) {
    int len = 0;
    while (str[len] != '\0')
	++len;
    return len;
}

void setStyle(const char *element, const char *attribute, const char *style) {
    setStyleAttribute(element, len(element), attribute, len(attribute), style, len(style));
}

void _start() {
    // document.querySelector("h1").style.color = "red";
    setStyle("h1", "background", "red");
}
