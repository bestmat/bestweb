extern void print_num(int x);
extern void setStyleJS(const char *element, int elementSize, const char *attribute, int attributeSize, const char *value, int valueSize);
extern void setPropertyJS(const char *element, int elementSize, const char *property, int propertySize, const char *value, int valueSize);
extern void createElementJS(const char *element, int elementSize, const char *selector, int selectorSize, const char *content, int contentSize, const char *parent, int parentSize);

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
    setStyleJS(element, len(element), attribute, len(attribute), style, len(style));
}

void setProperty(const char *element, const char *property, const char *style) {
    setPropertyJS(element, len(element), property, len(property), style, len(style));
}

void createElement(const char *element, const char *selector, const char *content, const char *parent) {
    createElementJS(element, len(element), selector, len(selector), content, len(content), parent, len(parent));
}

void _start() {
    // document.querySelector("h1").style.color = "red";
    setStyle("h1", "background", "red");
    createElement("h1", ".c", "Hello, World!", "body");
}
