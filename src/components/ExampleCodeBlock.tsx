"use client";

import Markdown from "react-markdown";

const code = `
### AddToCart.tsx
~~~js
<ActionMenu>
    <ActionMenuTrigger asChild>
        <Button
            variant="contained"
            size="medium"
            startIcon={<AddShoppingCart />}
        >
            Buy
        </Button>
    </ActionMenuTrigger>
    <ActionMenuContent>
        <Container
            maxWidth="md"
            sx={{
                paddingX: { xs: 2 },
                minWidth: {
                md: 400,
                },
            }}
        >
        <Stack gap={1}>
            {options.map(({ id, ...item }) => (
                <ProductItem key={id} {...item} onClick={handleItemClick} />
            ))}
        </Stack>
        </Container>
    </ActionMenuContent>
</ActionMenu>
~~~


### ActionMenu.tsx
~~~js
const ActionMenu: React.FC<ActionMenuProps> = ({
  id: propsId,
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? propsId : undefined;

  return (
    <ActionMenuContext.Provider
      value={{
        id,
        anchorEl,
        setAnchorEl,
      }}
    >
      {children}
    </ActionMenuContext.Provider>
  );
};
~~~


### ActionMenuTrigger.tsx
~~~js
const ActionMenuTrigger = ({
  asChild = false,
  children,
  ...props
}: ActionMenuTriggerProps) => {
  const anchorRef = useRef<HTMLButtonElement>(null);

  const { id, anchorEl, setAnchorEl } = useActionMenuContext();
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setAnchorEl(anchorRef.current);
  };

  const Comp = asChild ? Slot : Button;

  return (
    <Box ref={anchorRef}>
      <Comp
        {...props}
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          display: !open ? "inline-flex" : "none",
        }}
      >
        {children}
      </Comp>
      <Fab
        onClick={() => setAnchorEl(null)}
        color="secondary"
        size="small"
        sx={{
          zIndex: (theme: Theme) => theme.zIndex.modal + 1,
          display: open ? "inline-flex" : "none",
        }}
      >
        <Close />
      </Fab>
    </Box>
  );
}
~~~

### ActionMenuContent.tsx
~~~js
const ActionMenuContent = ({ children }: ActionMenuContent) => {
  const { id, anchorEl, setAnchorEl } = useActionMenuContext();
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);

  return (
    <Backdrop
      open={open}
      onClick={handleClose}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      {open && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                boxShadow: "none",
                background: "transparent",
              },
            },
          }}
        >
          {children}
        </Popover>
      )}
    </Backdrop>
  );
}
~~~
`;
const ExampleCodeBlock = () => {
  return <Markdown>{code}</Markdown>;
};

export { ExampleCodeBlock };
